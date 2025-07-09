# integration.py
"""
Integrates surface gradients to produce elevation map (DEM).
"""
import numpy as np
from skimage.restoration import unwrap_phase

def integrate_gradients(p, q):
    """
    Integrate gradients (p, q) to produce elevation map z.
    Use Frankot–Chellappa or Poisson solver.
    """
    # TODO: Implement Frankot–Chellappa or use existing library
    # Placeholder: return zeros
    z = np.zeros_like(p)
    return z
