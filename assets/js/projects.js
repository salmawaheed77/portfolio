/**
 * SALMA WAHEED — DATA ENGINEER PORTFOLIO
 * Projects Controller: Filter tabs & Case Study Modal Viewer
 */

const PROJECTS_DATA = [
  {
    id: 'python-calculator',
    title: 'Python Desktop Calculator Application',
    tagline: 'Modern Object-Oriented Calculator GUI Engineered in Python & Tkinter',
    category: 'python-etl',
    categoryLabel: 'Python OOP & GUI',
    thumbnail: 'assets/images/projects/python-calculator.jpg',
    metrics: 'Object-Oriented Design | Event-Driven Tkinter GUI | Defensive Error Handling',
    technologies: ['Python', 'Tkinter', 'OOP', 'Event Handling', 'GUI Architecture', 'Arithmetic Engine'],
    githubUrl: 'https://github.com/salmawaheed77/Python-Calculator',
    liveDemoUrl: 'https://github.com/salmawaheed77/Python-Calculator#readme',
    summary: 'A simple and responsive calculator application built using Python and Tkinter. Implements an object-oriented event-driven architecture performing standard arithmetic operations with defensive error catching and clean state handling.',
    problem: 'Basic calculation tools often suffer from rigid terminal-only inputs, lack defensive safeguards against zero-division errors, and lack structured object-oriented separation between user interface controls and calculation logic.',
    solution: 'Designed and implemented an ergonomic graphical user interface in Python with Tkinter. Developed an event-driven calculator class managing expression state, defensive try-except blocks for arithmetic safety, responsive button grid layout, and keyboard event bindings.',
    keyFeatures: [
      'Built a simple, robust Python application performing core arithmetic operations (+, -, *, /)',
      'Engineered with Tkinter GUI featuring clean dark theme aesthetics and responsive button grids',
      'Defensive error recovery handling invalid syntax and zero-division exceptions smoothly',
      'Object-Oriented Programming (OOP) architecture separating math evaluation from UI render state',
      'Supports expression chaining, instant clear (C), and decimal precision formatting'
    ],
    codeSnippet: `import tkinter as tk
from tkinter import messagebox

class PythonCalculator:
    def __init__(self, root):
        self.root = root
        self.root.title("Python Calculator — Salma Waheed")
        self.root.geometry("340x480")
        self.root.configure(bg="#09070f")
        self.root.resizable(False, False)
        self.expression = ""

        # LCD Display Screen
        self.display = tk.Entry(
            root, font=('JetBrains Mono', 22, 'bold'),
            bg="#161224", fg="#f8fafc", bd=0, justify="right"
        )
        self.display.pack(fill="x", padx=16, pady=20, ipady=12)
        self.create_buttons()

    def press(self, key):
        if key == "=":
            try:
                result = str(round(eval(self.expression), 4))
                self.display.delete(0, tk.END)
                self.display.insert(tk.END, result)
                self.expression = result
            except ZeroDivisionError:
                messagebox.showerror("Math Error", "Division by zero is undefined")
            except Exception:
                messagebox.showerror("Error", "Invalid Expression")
        elif key == "C":
            self.expression = ""
            self.display.delete(0, tk.END)
        else:
            self.expression += str(key)
            self.display.delete(0, tk.END)
            self.display.insert(tk.END, self.expression)`,
    gallery: [
      {
        src: 'assets/images/projects/python-calculator.jpg',
        caption: 'Python Tkinter Calculator UI: Clean Dark Theme and Object-Oriented State Engine'
      }
    ]
  },
  {
    id: 'bike-trip-analysis',
    title: 'Divvy Bike-Trip Data Pipeline & Analytics',
    tagline: '5.71M+ Rides Cleaned & Visualized via Automated Python ETL',
    category: 'python-etl',
    categoryLabel: 'Python ETL & EDA',
    thumbnail: 'assets/images/projects/bike-trip-hourly-demand.png',
    metrics: '5,712,887 records processed | 610.2+ MB memory footprint',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'OS Module', 'Jupyter Notebook'],
    githubUrl: 'https://github.com/salmawaheed77/Bike-Trip-Data-Analysis',
    liveDemoUrl: 'https://github.com/salmawaheed77/Bike-Trip-Data-Analysis#readme',
    summary: 'An end-to-end data pipeline that automatically ingests 12 monthly CSV files using the Python OS module, merges and validates schemas, handles missing coordinates and station data, engineers temporal trip metrics, and produces analytical visualizations on Chicago bike-share trends.',
    problem: 'Divvy bike-share historical trip data is partitioned into separate monthly CSV archives totaling over 5.7 million rows. Analyzing these records required manual collation, resolving inconsistent station naming conventions, handling null geographic coordinates, and computing non-trivial trip duration metrics without running out of memory.',
    solution: 'Designed an automated batch ingestion script utilizing Python\'s OS module to dynamically crawl directories, extract files, concatenate datasets into a single memory-optimized DataFrame, clean missing values, engineer custom features (trip duration in minutes, weekday/weekend indicators, hour of day, and seasonal buckets), and generate publication-ready Seaborn/Matplotlib charts.',
    keyFeatures: [
      'Automated batch ingestion reading multiple CSVs from directory with dynamic OS file traversal',
      'Unified 5,712,887 trip entries into a single 610+ MB dataset with normalized timestamps',
      'Engineered duration_min, month_name, day_of_week, and hourly commute distribution metrics',
      'Comparative demand analysis uncovering weekday rush-hour peaks (8 AM & 5 PM) vs weekend afternoon curves',
      'Customer segmentation revealing annual subscribers (64.1%) vs casual day-pass riders (35.9%)'
    ],
    codeSnippet: `import os
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Dynamic directory ingestion for all 2023 monthly datasets
data_dir = r"data/2023-divvy-tripdata_CSV/"
files = [f for f in os.listdir(data_dir) if f.endswith('.csv')]
all_months_data = pd.concat([pd.read_csv(os.path.join(data_dir, f)) for f in files], ignore_index=True)

# Datetime parsing & feature engineering
all_months_data['started_at'] = pd.to_datetime(all_months_data['started_at'])
all_months_data['ended_at'] = pd.to_datetime(all_months_data['ended_at'])
all_months_data['duration_min'] = (all_months_data['ended_at'] - all_months_data['started_at']).dt.total_seconds() / 60
all_months_data['hour'] = all_months_data['started_at'].dt.hour
all_months_data['day_of_week'] = all_months_data['started_at'].dt.day_name()`,
    gallery: [
      {
        src: 'assets/images/projects/bike-trip-hourly-demand.png',
        caption: 'Hourly Demand Curve: Peak bike usage at 17:00 (5 PM) with over 570,000 trips'
      },
      {
        src: 'assets/images/projects/bike-trip-weekday-vs-weekend.png',
        caption: 'Demand Pattern: Weekdays (bimodal commuter peaks) vs Weekends (leisure afternoon bell curve)'
      },
      {
        src: 'assets/images/projects/bike-trip-monthly-rides.png',
        caption: 'Seasonal Distribution: Summer months (July & August) exceeding 750,000 rides per month'
      },
      {
        src: 'assets/images/projects/bike-trip-member-share.png',
        caption: 'Customer Breakdown: 64.1% Annual Members vs 35.9% Casual Riders'
      },
      {
        src: 'assets/images/projects/bike-trip-weekly-demand.png',
        caption: 'Day of Week Distribution: Member peak commute volume Tuesday through Thursday'
      },
      {
        src: 'assets/images/projects/bike-trip-os-ingestion.png',
        caption: 'Automated CSV directory scanning & concatenation pipeline implementation'
      },
      {
        src: 'assets/images/projects/bike-trip-data-info.png',
        caption: 'Dataframe Schema & Memory Profile: 5,712,887 rows processed'
      }
    ]
  },
  {
    id: 'azure-cloud-lakehouse',
    title: 'Enterprise Azure Cloud Data Lakehouse',
    tagline: 'Multi-hop Architecture with Azure Data Factory & Synapse Analytics',
    category: 'cloud-pipelines',
    categoryLabel: 'Cloud & Lakehouse',
    thumbnail: 'assets/images/projects/azure-data-architecture.jpg',
    metrics: 'Bronze / Silver / Gold Medallion Pipeline | Azure Data Factory Orchestration',
    technologies: ['Microsoft Azure', 'Azure Data Factory', 'Azure Blob Storage Gen2', 'Azure Synapse Analytics', 'SQL Serverless Pool', 'Python'],
    githubUrl: 'https://github.com/salmawaheed77/portfolio',
    liveDemoUrl: 'https://github.com/salmawaheed77/portfolio#readme',
    summary: 'A cloud-native Lakehouse architecture built on Microsoft Azure following the Medallion pattern. Automates scheduled ingestion of transactional records into Azure Data Lake Storage Gen2 (Bronze layer), applies transformations in Synapse Spark/SQL pools (Silver layer), and serves dimensional star schemas for enterprise reporting (Gold layer).',
    problem: 'Enterprise business units struggle with fragmented source databases, disparate CSV/JSON feeds, and slow queries on raw unindexed operational stores, risking service downtime and stale analytics.',
    solution: 'Engineered an end-to-end cloud pipeline using Azure Data Factory pipelines with triggers to orchestrate copy activities, storing immutable raw logs in ADLS Gen2 Bronze, executing PySpark cleanup into curated Parquet tables in Silver, and populating a Dedicated SQL Pool Gold mart for fast analytical consumption.',
    keyFeatures: [
      'Three-tier Medallion architecture (Raw Bronze -> Cleaned Silver -> Analytics Gold)',
      'Automated pipeline triggers & monitoring in Azure Data Factory',
      'Serverless SQL and Spark pool queries on Parquet storage',
      'Role-based access control and enterprise data governance setup'
    ],
    codeSnippet: `-- Azure Synapse Serverless SQL Query over Curated Parquet Data
SELECT 
    r.VendorID,
    DATEPART(month, r.PickupTime) AS TripMonth,
    COUNT(*) AS TotalTrips,
    ROUND(AVG(r.TripDistance), 2) AS AvgDistanceMiles,
    ROUND(SUM(r.TotalAmount), 2) AS RevenueUSD
FROM OPENROWSET(
    BULK 'https://azuredatalakeprod.dfs.core.windows.net/curated/trips/*.parquet',
    FORMAT = 'PARQUET'
) AS r
GROUP BY r.VendorID, DATEPART(month, r.PickupTime)
ORDER BY TripMonth ASC;`,
    gallery: [
      {
        src: 'assets/images/projects/azure-data-architecture.jpg',
        caption: 'Enterprise Azure Cloud Data Architecture schematic showing Ingestion, Lakehouse, and Analytics'
      }
    ]
  },
  {
    id: 'spark-bigdata-pipeline',
    title: 'Apache Spark & Hadoop Big Data Engine',
    tagline: 'Distributed Batch Processing & Cluster Pipeline Optimization',
    category: 'big-data',
    categoryLabel: 'Big Data & Spark',
    thumbnail: 'assets/images/projects/spark-bigdata-architecture.jpg',
    metrics: 'Multi-node cluster simulation | Parquet column-oriented partition storage',
    technologies: ['Apache Spark', 'PySpark', 'Hadoop HDFS', 'Spark SQL', 'YARN', 'Python'],
    githubUrl: 'https://github.com/salmawaheed77/portfolio',
    liveDemoUrl: 'https://github.com/salmawaheed77/portfolio#readme',
    summary: 'A scalable distributed batch processing pipeline built with PySpark and Hadoop HDFS designed to overcome memory bottlenecks when handling high-volume datasets. Leverages DataFrame operations, resilient distributed datasets (RDDs), and column-oriented partition pruning to drastically reduce query latency.',
    problem: 'Single-node Pandas workflows fail with memory exhaustion (OOM) when data scale expands beyond RAM capacity, requiring distributed memory management and parallel worker execution.',
    solution: 'Implemented PySpark batch transformations distributed across cluster workers, partitioning data by geographic zone and date, broadcasting small lookup tables, and writing out compressed snappy Parquet files to Hadoop HDFS.',
    keyFeatures: [
      'Distributed DataFrame transformations across multiple worker nodes',
      'Partitioning strategy by year/month to optimize query filtering',
      'Broadcast joins on dimensional tables to prevent cluster data shuffling',
      'Comprehensive error handling and cluster job telemetry'
    ],
    codeSnippet: `from pyspark.sql import SparkSession
from pyspark.sql.functions import col, to_timestamp, year, month

# Initialize Distributed Spark Session
spark = SparkSession.builder \\
    .appName("ScalableLogProcessor") \\
    .config("spark.sql.shuffle.partitions", "200") \\
    .getOrCreate()

# Distributed Ingestion & Partitioning
df = spark.read.option("header", "true").csv("hdfs:///data/raw_stream/")
processed_df = df.withColumn("timestamp", to_timestamp(col("date_str"), "yyyy-MM-dd HH:mm:ss")) \\
                 .withColumn("year", year(col("timestamp"))) \\
                 .withColumn("month", month(col("timestamp")))

processed_df.write.partitionBy("year", "month").parquet("hdfs:///data/warehouse/events/")`,
    gallery: [
      {
        src: 'assets/images/projects/spark-bigdata-architecture.jpg',
        caption: 'Distributed Apache Spark & Hadoop Cluster Architecture diagram'
      }
    ]
  },
  {
    id: 'mysql-retail-architecture',
    title: 'Relational Database Schema & MySQL Query Mart',
    tagline: '3NF Normalized Database Design with Index Optimization',
    category: 'databases',
    categoryLabel: 'Databases & SQL',
    thumbnail: 'assets/images/projects/bike-trip-data-info.png',
    metrics: '3NF Normalization | B-Tree Indexing | Sub-millisecond joins',
    technologies: ['MySQL', 'Relational Modeling', 'SQL', 'Database Tuning', 'Stored Procedures'],
    githubUrl: 'https://github.com/salmawaheed77/portfolio',
    liveDemoUrl: 'https://github.com/salmawaheed77/portfolio#readme',
    summary: 'A relational database architecture engineered for transactional integrity and analytical throughput. Features Third Normal Form (3NF) relational design, foreign key constraints, composite index tuning, and stored procedures for automated aggregation reporting.',
    problem: 'Unstructured and denormalized transactional tables lead to data redundancy, update anomalies, and slow multi-table join bottlenecks as table row counts increase.',
    solution: 'Designed and deployed a 3NF relational schema in MySQL with optimized composite B-Tree indexes, implemented views for executive KPI dashboards, and wrote stored procedures to pre-aggregate high-frequency queries.',
    keyFeatures: [
      'Normalized schema eliminating insert/update/delete anomalies',
      'Composite indexes tuned for frequent multi-column WHERE and ORDER BY filters',
      'Stored procedures for automated end-of-day analytics calculation',
      'ACID transactional safety compliance'
    ],
    codeSnippet: `-- MySQL Analytical Aggregation with Window Functions
WITH MonthlyMetrics AS (
    SELECT 
        station_id,
        DATE_FORMAT(started_at, '%Y-%m') AS ride_month,
        COUNT(ride_id) AS total_departures,
        AVG(duration_min) AS avg_duration,
        RANK() OVER (PARTITION BY DATE_FORMAT(started_at, '%Y-%m') ORDER BY COUNT(ride_id) DESC) as rank_in_month
    FROM trip_records
    GROUP BY station_id, DATE_FORMAT(started_at, '%Y-%m')
)
SELECT station_id, ride_month, total_departures, ROUND(avg_duration, 1) AS avg_min
FROM MonthlyMetrics
WHERE rank_in_month <= 5
ORDER BY ride_month ASC, total_departures DESC;`,
    gallery: [
      {
        src: 'assets/images/projects/bike-trip-data-info.png',
        caption: 'Relational schema columns, data types, and index verification'
      }
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  renderProjectCards(PROJECTS_DATA);
  initProjectFilters();
  initModalListeners();
});

/* ==========================================================================
   RENDER PROJECT CARDS
   ========================================================================== */
function renderProjectCards(projects) {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  container.innerHTML = projects.map(project => `
    <article class="project-card" data-category="${project.category}">
      <div class="project-thumb-container">
        <span class="badge badge-primary project-badge-overlay">${project.categoryLabel}</span>
        <img src="${project.thumbnail}" alt="${project.title} Preview" class="project-thumb" loading="lazy">
      </div>
      <div class="project-card-content">
        <div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-summary">${project.summary.substring(0, 140)}...</p>
          
          <div class="project-highlight-box">
            <i data-lucide="zap"></i>
            <span class="project-highlight-text">${project.metrics}</span>
          </div>

          <div class="project-tags">
            ${project.technologies.slice(0, 4).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            ${project.technologies.length > 4 ? `<span class="tech-tag">+${project.technologies.length - 4}</span>` : ''}
          </div>
        </div>

        <div class="project-footer-actions">
          <button class="btn btn-outline btn-sm open-case-study-btn" data-project-id="${project.id}">
            <i data-lucide="book-open"></i> Case Study
          </button>
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" aria-label="View source code on GitHub">
            <i data-lucide="github"></i> Code
          </a>
        </div>
      </div>
    </article>
  `).join('');

  if (window.lucide) window.lucide.createIcons();

  // Attach case study click handlers
  document.querySelectorAll('.open-case-study-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const projId = e.currentTarget.getAttribute('data-project-id');
      openCaseStudy(projId);
    });
  });
}

/* ==========================================================================
   PROJECT CATEGORY FILTERS
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* ==========================================================================
   CASE STUDY MODAL CONTROLLER
   ========================================================================== */
function initModalListeners() {
  const modalBackdrop = document.getElementById('case-study-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && modalBackdrop) {
    closeBtn.addEventListener('click', closeCaseStudy);
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeCaseStudy();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
        closeCaseStudy();
      }
    });
  }
}

function openCaseStudy(projectId) {
  const currentIndex = PROJECTS_DATA.findIndex(p => p.id === projectId);
  if (currentIndex === -1) return;
  const project = PROJECTS_DATA[currentIndex];

  const prevProject = PROJECTS_DATA[(currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];
  const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];

  const modal = document.getElementById('case-study-modal');
  const modalContent = document.getElementById('modal-dynamic-content');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-header">
      <div class="modal-title-group">
        <span class="badge badge-primary" style="margin-bottom: 0.5rem;">${project.categoryLabel}</span>
        <h3>${project.title}</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem;">${project.tagline}</p>
      </div>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <button class="modal-close-btn" id="modal-close-btn" aria-label="Close Case Study">
          <i data-lucide="x"></i>
        </button>
      </div>
    </div>

    <div class="modal-body">
      <!-- Media Gallery -->
      ${project.gallery && project.gallery.length > 0 ? `
        <div class="modal-gallery-preview">
          <img id="active-gallery-image" src="${project.gallery[0].src}" alt="${project.gallery[0].caption}">
        </div>
        <p id="active-gallery-caption" style="font-size: 0.85rem; color: var(--text-subtle); margin-bottom: 1rem; text-align: center; font-style: italic;">
          ${project.gallery[0].caption}
        </p>

        ${project.gallery.length > 1 ? `
          <div class="modal-gallery-thumbs">
            ${project.gallery.map((img, idx) => `
              <div class="gallery-thumb-item ${idx === 0 ? 'active' : ''}" onclick="switchGalleryImage('${img.src}', '${img.caption.replace(/'/g, "\\'")}', this)">
                <img src="${img.src}" alt="Thumbnail ${idx + 1}">
              </div>
            `).join('')}
          </div>
        ` : ''}
      ` : ''}

      <!-- Metric Callout -->
      <div class="project-highlight-box" style="margin-bottom: 2rem;">
        <i data-lucide="activity"></i>
        <span class="project-highlight-text">${project.metrics}</span>
      </div>

      <!-- Problem & Solution Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
        <div class="card" style="background: rgba(239, 68, 68, 0.05); border-color: rgba(239, 68, 68, 0.2);">
          <h4 style="color: #f87171; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
            <i data-lucide="alert-circle"></i> The Challenge
          </h4>
          <p style="font-size: 0.9rem; line-height: 1.7;">${project.problem}</p>
        </div>

        <div class="card" style="background: rgba(16, 185, 129, 0.05); border-color: rgba(16, 185, 129, 0.2);">
          <h4 style="color: #34d399; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
            <i data-lucide="check-circle-2"></i> Engineered Solution
          </h4>
          <p style="font-size: 0.9rem; line-height: 1.7;">${project.solution}</p>
        </div>
      </div>

      <!-- Key Capabilities -->
      <div class="modal-section-block">
        <h4><i data-lucide="layers"></i> Key Capabilities & Architectural Highlights</h4>
        <ul style="display: flex; flex-direction: column; gap: 0.65rem; margin-top: 0.75rem;">
          ${project.keyFeatures.map(f => `
            <li style="display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.925rem; color: var(--text-muted);">
              <i data-lucide="chevron-right" style="color: var(--primary-light); flex-shrink: 0; margin-top: 3px;"></i>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Code Walkthrough -->
      <div class="modal-section-block">
        <h4><i data-lucide="code-2"></i> Implementation Walkthrough</h4>
        <pre class="code-preview-box"><code>${escapeHtml(project.codeSnippet)}</code></pre>
      </div>

      <!-- Technologies -->
      <div class="modal-section-block">
        <h4><i data-lucide="cpu"></i> Technology Stack</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.5rem;">
          ${project.technologies.map(t => `<span class="tech-tag" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">${t}</span>`).join('')}
        </div>
      </div>

      <!-- Next / Previous Project Navigation -->
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 1.25rem 0; border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle); margin: 2rem 0; flex-wrap: wrap; gap: 1rem;">
        <button class="btn btn-outline btn-sm" onclick="openCaseStudy('${prevProject.id}')">
          <i data-lucide="arrow-left"></i> Previous: ${prevProject.title.length > 25 ? prevProject.title.substring(0, 25) + '...' : prevProject.title}
        </button>
        <button class="btn btn-outline btn-sm" onclick="openCaseStudy('${nextProject.id}')">
          Next: ${nextProject.title.length > 25 ? nextProject.title.substring(0, 25) + '...' : nextProject.title} <i data-lucide="arrow-right"></i>
        </button>
      </div>

      <!-- Modal Footer -->
      <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 0.5rem; flex-wrap: wrap; gap: 1rem;">
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            <i data-lucide="github"></i> View GitHub Repository
          </a>
          <a href="${project.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            <i data-lucide="external-link"></i> Live Documentation
          </a>
        </div>
        <button class="btn btn-outline" onclick="closeCaseStudy()">Close Window</button>
      </div>
    </div>
  `;

  modal.classList.add('open');
  modal.scrollTop = 0;
  modalContent.scrollTop = 0;
  document.body.style.overflow = 'hidden';

  // Re-bind close button
  document.getElementById('modal-close-btn')?.addEventListener('click', closeCaseStudy);

  if (window.lucide) window.lucide.createIcons();
}

function closeCaseStudy() {
  const modal = document.getElementById('case-study-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Global gallery switcher
window.switchGalleryImage = function(src, caption, thumbElement) {
  const mainImg = document.getElementById('active-gallery-image');
  const captionEl = document.getElementById('active-gallery-caption');
  
  if (mainImg) mainImg.src = src;
  if (captionEl) captionEl.innerText = caption;

  document.querySelectorAll('.gallery-thumb-item').forEach(el => el.classList.remove('active'));
  thumbElement?.classList.add('active');
};

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
