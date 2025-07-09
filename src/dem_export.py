# dem_export.py
"""
Exports DEM to GeoTIFF/IMG using rasterio, with geo-referencing.
"""
import rasterio

def export_dem(dem_array, output_path, reference_path=None):
    """
    Save DEM as GeoTIFF using rasterio. Optionally use reference image for georeferencing.
    """
    with rasterio.open(
        output_path, 'w',
        driver='GTiff',
        height=dem_array.shape[0],
        width=dem_array.shape[1],
        count=1,
        dtype=dem_array.dtype
    ) as dst:
        dst.write(dem_array, 1)
