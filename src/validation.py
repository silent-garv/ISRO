# validation.py
"""
Validation and visualization: RMSE, 3D rendering, crater depth checks.
"""
import numpy as np
from sklearn.metrics import mean_squared_error
import matplotlib.pyplot as plt

def compute_rmse(ground_truth, generated):
    """
    Compute RMSE between ground truth and generated DEMs.
    """
    return np.sqrt(mean_squared_error(ground_truth, generated))

def plot_3d_surface(dem):
    """
    Render 3D surface of DEM using matplotlib.
    """
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(dem.shape[1]), np.arange(dem.shape[0]))
    ax.plot_surface(X, Y, dem, cmap='gray')
    plt.title('DEM 3D Surface')
    plt.show()

def plot_dem_2d(dem):
    """
    Show DEM as a 2D heatmap.
    """
    plt.imshow(dem, cmap='gray')
    plt.title('DEM 2D Heatmap')
    plt.colorbar(label='Elevation')
    plt.show()
