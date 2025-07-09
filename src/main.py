# main.py
"""
Pipeline entry point for lunar DEM generation.
"""
from data_acquisition import download_lunar_images, load_metadata, load_ground_truth_dem
from preprocessing import preprocess_image
from shape_from_shading import estimate_normals
from integration import integrate_gradients
from dem_export import export_dem
from validation import compute_rmse, plot_3d_surface, plot_dem_2d

def main():
    print("Lunar DEM Generation Pipeline - ISRO Hackathon")
    # 1. Data acquisition (stub)
    # download_lunar_images('data/')
    # 2. Preprocessing (stub)
    # processed_img_path = preprocess_image('data/lunar_image.tif', 'data/lunar_image_processed.tif')
    # 3. Load metadata (stub)
    # metadata = load_metadata('data/lunar_image.json')
    # 4. Shape-from-shading (stub)
    # img = ... # Load processed image as numpy array
    # p, q = estimate_normals(img, sun_direction=metadata['sun_direction'])
    # 5. Integration (stub)
    # z = integrate_gradients(p, q)
    # 6. Export DEM (stub)
    # export_dem(z, 'data/output_dem.tif')
    # 7. Validation (stub)
    # ground_truth = load_ground_truth_dem('data/ground_truth_dem.tif')
    # rmse = compute_rmse(ground_truth, z)
    # print(f'RMSE: {rmse} meters')
    # Visualization
    # plot_dem_2d(z)
    # plot_3d_surface(z)

if __name__ == "__main__":
    main()
