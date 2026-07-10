import os
import sys

def check_pillow():
    try:
        from PIL import Image
    except ImportError:
        import subprocess
        subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])

# Ensure Pillow is installed
check_pillow()
from PIL import Image, ImageDraw, ImageFont

# Define assets directory
assets_dir = r"k:\Netflix website\assets"
os.makedirs(assets_dir, exist_ok=True)

# List of posters to generate (name, text, start_color, end_color)
posters = [
    ("milky_way_billboard", "MILKY WAY DYNAMICS", "#0f0c1b", "#302b63"),
    ("milky_way_card", "MILKY WAY MODEL", "#0f0c1b", "#302b63"),
    ("vilnius_card", "STELLAR ABUNDANCE", "#1a0826", "#4a125c"),
    ("iia_card", "QUASAR SPECTRA", "#061329", "#11385c"),
    ("aries_card", "SUNSPOT PREDICTION", "#2d0b00", "#692a0e"),
    ("navars_card", "ASTRONOMY EDUCATION", "#021c1e", "#004e64"),
    ("tutor_card", "PHYSICS TUTOR", "#00203f", "#adefd1"),
    ("freelance_card", "INDIVIDUAL PHYSICS", "#101820", "#f2aa4c"),
    ("msc_card", "M.SC. ASTROPHYSICS", "#2b1055", "#7597de"),
    ("bsc_card", "B.SC. PHYSICS", "#1e3c72", "#2a5298"),
    ("asteroid_card", "ASTEROID SEARCH", "#130cb7", "#52e5e7"),
    ("mentor_card", "STUDENT MENTOR", "#0f2027", "#203a43"),
    ("cubesat_card", "1U CUBESAT WEATHER", "#3a6073", "#3a6073"),
    ("deepspace_card", "DEEP SPACE TALKS", "#000000", "#434343"),
    ("gammaray_card", "GAMMA RAY OBS", "#4b6cb7", "#182848"),
    ("python_card", "PYTHON & MODULES", "#1f4068", "#162447"),
    ("astrotools_card", "ASTRO TOOLS & OS", "#0f2027", "#2c5364"),
    ("cert_blackhole", "BLACK HOLE ASTRO 101", "#050505", "#1c0d02"),
    ("cert_ipsc", "PLANETARY EXPLORATION", "#1d2671", "#c33764"),
    ("cert_aditya", "ADITYA L-1 SOLAR", "#f857a6", "#ff5858"),
    ("cert_iucaa", "IUCAA SUMMER SCHOOL", "#4ca1af", "#c4e0e5"),
    ("cert_photonics", "MATLAB PHOTONICS", "#11998e", "#38ef7d"),
    ("cert_hpc", "IIT BOMBAY HPC", "#3a7bd5", "#3a6073"),
    ("cert_waves", "GRAVITATIONAL WAVES", "#000000", "#0f9b0f"),
    ("cert_astropedia", "ASTROPEDIA IIT BHU", "#ff9966", "#ff5e62"),
    ("cert_nanotech", "NANOSCIENCE WORKSHOP", "#2c3e50", "#3498db"),
    ("placeholder_card", "ASTROFLIX ORIGINAL", "#141414", "#2c0205")
]

def create_poster(filename, text, color1, color2):
    # 16:9 card aspect ratio
    width, height = 480, 270
    
    # Create gradient background
    base = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(base)
    
    # Simple diagonal gradient
    r1, g1, b1 = int(color1[1:3],16), int(color1[3:5],16), int(color1[5:7],16)
    r2, g2, b2 = int(color2[1:3],16), int(color2[3:5],16), int(color2[5:7],16)
    
    for y in range(height):
        for x in range(width):
            # Gradient factor
            f = (x + y) / (width + height)
            r = int(r1 + (r2 - r1) * f)
            g = int(g1 + (g2 - g1) * f)
            b = int(b1 + (b2 - b1) * f)
            base.putpixel((x, y), (r, g, b))
            
    # Add neon horizontal bar at bottom
    for x in range(width):
        for y in range(height - 6, height):
            base.putpixel((x, y), (229, 9, 20)) # Red bar
            
    # Draw Text
    draw = ImageDraw.Draw(base)
    
    # Try using default font or load simple one if available
    try:
        # Check system fonts
        font_paths = [
            "C:\\Windows\\Fonts\\arialbd.ttf",
            "C:\\Windows\\Fonts\\segoeuib.ttf",
            "C:\\Windows\\Fonts\\trebucbd.ttf"
        ]
        font = None
        for path in font_paths:
            if os.path.exists(path):
                font = ImageFont.truetype(path, 22)
                break
        if not font:
            font = ImageFont.load_default()
    except Exception:
        font = ImageFont.load_default()
        
    # Draw Title
    text_width = draw.textlength(text, font=font) if hasattr(draw, 'textlength') else 200
    text_x = (width - text_width) // 2
    text_y = (height - 30) // 2
    
    # Text shadow
    draw.text((text_x + 2, text_y + 2), text, fill=(0, 0, 0), font=font)
    # Text foreground (bright white or custom)
    draw.text((text_x, text_y), text, fill=(255, 255, 255), font=font)
    
    # Add a glowing "Kshitij Pawar" badge in corner
    badge_font = None
    try:
        for path in font_paths:
            if os.path.exists(path):
                badge_font = ImageFont.truetype(path, 12)
                break
    except Exception:
        pass
    if not badge_font:
        badge_font = ImageFont.load_default()
        
    draw.text((15, 15), "K S H I T I J   P A W A R", fill=(229, 9, 20), font=badge_font)
    
    # Save Image as WEBP
    save_path = os.path.join(assets_dir, f"{filename}.webp")
    base.save(save_path, "WEBP", quality=85)
    print(f"Generated: {save_path}")

# Generate all
for filename, text, color1, color2 in posters:
    create_poster(filename, text, color1, color2)

print("All poster placeholders generated successfully!")
