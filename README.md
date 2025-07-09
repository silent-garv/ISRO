
# 🌑 LunarVision: Lunar DEM Generation using Photoclinometry

> A Bharatiya Antariksh Hackathon 2025 Submission  
> **Problem Statement 13** – Generation of High-Resolution Lunar DEM from Lunar Images using Photoclinometry (Shape-from-Shading)

---

## 🧠 Overview

LunarVision is a lightweight and modular pipeline for generating **Digital Elevation Models (DEMs)** of the Moon’s surface using **photoclinometry** — a technique that estimates surface topography from variations in image brightness and solar illumination angles. The system takes in a single 2D grayscale lunar image and reconstructs a 3D terrain map with elevation values.

---

## 🎯 Objectives

- Extract high-resolution DEM from lunar image using **Shape-from-Shading (SfS)**
- Integrate surface slopes into elevation using mathematical models
- Validate generated DEM with reference data (LOLA, Kaguya)
- Export results in geospatial formats (GeoTIFF)
- Visualize outputs in 2D and 3D

---

## 📸 Inputs

| Input               | Description                                 |
|--------------------|---------------------------------------------|
| Monochromatic Image| LROC or simulated lunar image               |
| Sun Azimuth Angle  | Direction of sunlight during capture        |
| Sun Elevation Angle| Solar height above horizon                  |
| [Optional] Metadata| Sensor pitch/yaw/roll, time, coordinates    |

---

## 🧰 Tech Stack

| Module               | Tools / Libraries                        |
|----------------------|------------------------------------------|
| Image Processing     | `OpenCV`, `scikit-image`, `NumPy`        |
| Slope Estimation     | Custom Lambertian / Lunar-Lambert Model  |
| Surface Integration  | `SciPy`, `Frankot–Chellappa`, `Poisson`  |
| Geospatial Export    | `GDAL`, `Rasterio`, `GeoTIFF`            |
| Visualization        | `Matplotlib`, `Mayavi`, `QGIS`           |
| Web Dashboard (opt)  | `Streamlit`, `Plotly`                    |

---

## 🔄 Pipeline

1. **Image Preprocessing** – Normalize brightness, remove noise.
2. **Surface Normal Estimation** – Estimate surface slope using reflectance model and illumination data.
3. **Slope Integration** – Integrate surface gradients into an elevation map using Poisson solvers.
4. **DEM Generation** – Export elevation data in GeoTIFF format.
5. **Validation** – Compare with reference DEMs (e.g., LOLA) using RMSE and visualize output.

---

## 📂 Folder Structure

```
📦 lunarvision/
 ┣ 📁 data/                 # Input images and sample metadata
 ┣ 📁 models/               # Shape-from-Shading & integration modules
 ┣ 📁 outputs/              # Generated DEMs and visualizations
 ┣ 📁 notebooks/            # Jupyter demos and experiments
 ┣ 📄 app.py                # Optional Streamlit interface
 ┣ 📄 main.py               # Main execution script
 ┗ 📄 requirements.txt      # Python dependencies
```

---

## 🧪 Evaluation Metrics

| Metric         | Description                              |
|----------------|------------------------------------------|
| RMSE           | Root Mean Squared Error with LOLA DEM   |
| SSIM           | Structural Similarity of terrain features|
| Runtime        | Processing time on standard hardware     |

---

## 📊 Example Output

- 🗺️ GeoTIFF DEM of a lunar crater
- 📈 3D terrain plot of reconstructed elevation
- 📐 Comparison heatmap with LOLA reference

---

## 🚀 Future Scope

- Use CNNs to estimate DEMs from images (deep learning SfS)
- Incorporate stereo imagery fusion
- Extend to Martian or asteroid topography

---

## 👨‍💻 Team EarthRisers 

- Shruti Chourasia (Team Lead)
- Garv Pankaj
- Devraj Chouhan
- Yash Chandenkhede

---

## 📃 License

This project is part of the Bharatiya Antariksh Hackathon 2025. For educational and non-commercial use only.

---

## 🙌 Acknowledgments

- ISRO, NRSC, and Bhuvan for open lunar data access
- NASA LRO / LOLA team for ground truth DEM references
- Research: Horn (1975), Wu & Li (2006) – Shape from Shading models
