/**
 * SALMA WAHEED — DATA ENGINEER PORTFOLIO
 * Interactive Live Data Pipeline Simulator
 */

const PIPELINE_LOGS = [
  { step: 1, type: 'prompt', text: '$ python run_data_pipeline.py --source divvy_2023 --target azure_lakehouse' },
  { step: 1, type: 'info', text: '[00:00:01] [INGESTION] Scanning local source directory: 12 monthly CSV files detected.' },
  { step: 1, type: 'highlight', text: '[00:00:02] [INGESTION] Merging files with pandas & OS module... [5,712,887 records queued]' },
  { step: 2, type: 'info', text: '[00:00:03] [PROFILING] Schema validated: 13 raw features detected across 610.2 MB buffer.' },
  { step: 2, type: 'warning', text: '[00:00:04] [QUALITY] Detected missing values in start_station_id (15.2%) and end_station_id.' },
  { step: 3, type: 'highlight', text: '[00:00:05] [CLEANING] Executed null imputation, station normalization & datetime casting.' },
  { step: 3, type: 'info', text: '[00:00:06] [TRANSFORM] Engineered duration_min, day_of_week, hour, and seasonal partitions.' },
  { step: 4, type: 'info', text: '[00:00:07] [STORAGE] Compressing to Snappy Parquet partition: azure-storage-gen2/curated/' },
  { step: 4, type: 'highlight', text: '[00:00:08] [LAKEHOUSE] Synapse Analytics Serverless SQL views successfully mapped.' },
  { step: 5, type: 'success', text: '[00:00:09] [SUCCESS] Pipeline execution finished in 1.48s. 5,712,887 rows processed (0 errors).' }
];

let pipelineInterval = null;
let currentLogIndex = 0;
let isRunning = false;

document.addEventListener('DOMContentLoaded', () => {
  initTerminal();
});

function initTerminal() {
  const runBtn = document.getElementById('term-run-btn');
  const resetBtn = document.getElementById('term-reset-btn');

  if (runBtn) {
    runBtn.addEventListener('click', togglePipeline);
  }
  if (resetBtn) {
    resetBtn.addEventListener('click', resetPipeline);
  }

  // Auto start simulation once when visible
  const termWrapper = document.getElementById('terminal-simulator');
  if (termWrapper && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isRunning && currentLogIndex === 0) {
          startPipeline();
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });
    observer.observe(termWrapper);
  } else {
    startPipeline();
  }
}

function startPipeline() {
  const terminalBody = document.getElementById('terminal-body');
  const runBtn = document.getElementById('term-run-btn');
  if (!terminalBody) return;

  isRunning = true;
  if (runBtn) runBtn.innerHTML = '<i data-lucide="pause"></i> Pause';
  if (window.lucide) window.lucide.createIcons();

  pipelineInterval = setInterval(() => {
    if (currentLogIndex >= PIPELINE_LOGS.length) {
      clearInterval(pipelineInterval);
      isRunning = false;
      if (runBtn) runBtn.innerHTML = '<i data-lucide="play"></i> Rerun';
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    const log = PIPELINE_LOGS[currentLogIndex];
    appendTerminalLine(log);
    updateStepTracker(log.step);

    currentLogIndex++;
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }, 650);
}

function pausePipeline() {
  clearInterval(pipelineInterval);
  isRunning = false;
  const runBtn = document.getElementById('term-run-btn');
  if (runBtn) runBtn.innerHTML = '<i data-lucide="play"></i> Resume';
  if (window.lucide) window.lucide.createIcons();
}

function togglePipeline() {
  if (isRunning) {
    pausePipeline();
  } else {
    if (currentLogIndex >= PIPELINE_LOGS.length) {
      resetPipeline();
    }
    startPipeline();
  }
}

function resetPipeline() {
  pausePipeline();
  currentLogIndex = 0;
  const terminalBody = document.getElementById('terminal-body');
  if (terminalBody) terminalBody.innerHTML = '';
  
  document.querySelectorAll('.pipeline-step-item').forEach(step => {
    step.classList.remove('active', 'completed');
  });

  const runBtn = document.getElementById('term-run-btn');
  if (runBtn) runBtn.innerHTML = '<i data-lucide="play"></i> Run Pipeline';
  if (window.lucide) window.lucide.createIcons();
}

function appendTerminalLine(log) {
  const terminalBody = document.getElementById('terminal-body');
  if (!terminalBody) return;

  const line = document.createElement('div');
  line.className = 'term-line';

  let colorClass = 'term-info';
  if (log.type === 'prompt') colorClass = 'term-prompt';
  if (log.type === 'highlight') colorClass = 'term-highlight';
  if (log.type === 'success') colorClass = 'term-success';
  if (log.type === 'warning') colorClass = 'term-highlight';

  line.innerHTML = `
    <span class="${colorClass}">${log.text}</span>
  `;

  terminalBody.appendChild(line);
}

function updateStepTracker(activeStepNumber) {
  const steps = document.querySelectorAll('.pipeline-step-item');
  steps.forEach(step => {
    const stepNum = parseInt(step.getAttribute('data-step') || '0', 10);
    if (stepNum < activeStepNumber) {
      step.classList.remove('active');
      step.classList.add('completed');
    } else if (stepNum === activeStepNumber) {
      step.classList.add('active');
      step.classList.remove('completed');
    } else {
      step.classList.remove('active', 'completed');
    }
  });
}
