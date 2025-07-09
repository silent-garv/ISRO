# data_acquisition.py
"""
Handles downloading and organizing lunar images, metadata, and ground truth DEMs.
"""
import os
import json
import numpy as np
import rasterio

def download_lunar_images(destination_folder):
    """
    Download lunar images and metadata to the destination folder.
    (Implement download logic or manual instructions here.)
    """
    print(f"Please manually download images and metadata to: {destination_folder}")
    pass

def load_metadata(metadata_path):
    """
    Load metadata (sun angles, camera params) from a JSON file.
    Example JSON structure:
    {
        "sun_azimuth": 135.0,
        "sun_elevation": 45.0,
        "focal_length": 50.0,
        "sensor_width": 36.0,
        "sensor_height": 24.0
    }
    """
    with open(metadata_path, 'r') as f:
        metadata = json.load(f)
    # Compute sun direction unit vector from azimuth/elevation
    az = np.deg2rad(metadata['sun_azimuth'])
    el = np.deg2rad(metadata['sun_elevation'])
    s = np.array([
        np.cos(el) * np.sin(az),
        np.cos(el) * np.cos(az),
        np.sin(el)
    ])
    metadata['sun_direction'] = s / np.linalg.norm(s)
    return metadata

def load_ground_truth_dem(dem_path):
    """
    Load ground truth DEM for validation as a numpy array.
    """
    with rasterio.open(dem_path) as src:
        dem = src.read(1)
    return dem
