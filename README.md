## TUTORIN

**Release Date:** Coming Soon

**Capstone Project of Bangkit Academy 2023 Batch II**

### Our Team
**Team ID:** CH2-PS126

**Team Members:**
- ML  •  Alfrethanov Christian Wijaya  •  M200BSY0319
- ML  •  Bela Sisilia  •  M283BSX1547
- ML  •  Ahmad Rifqi Al Aziz  •  M283BSY0536
- CC  •  Ahmad Ivan Andrian  •  C200BSY3441
- CC  •  Deva Sindi Maulita  •  C283BSX4193
- MD  •  Indra Niko Saputra  •  A200BSY2448

### Description
The "Tutorin" application simplifies accessing information about specific items, activities, and tutorials for their use or consumption, making learning easier. For example:
- Tutorials on using Gym/Fitness equipment
- Tutorials on how to consume certain medications
- Tutorials on how to consume specific types of food

The primary feature is the Image Classifier. Just take a photo of Gym Equipment / Medicine / Particular Food, and "Tutorin" will detect the object and provide guidance on its use or consumption.

During the Capstone Project, we focused on developing the "Tutor for Using Gym/Fitness Equipment."

### Details
**App Name:** Tutorin

**ML Details:**
- **Model Type:** Image Classifier
- **Model:** model.tflite
- **Algorithm:** CNN
- **Dataset:** fitness.zip
- **Classes:** Benchpress, Dumbells
- **Input Shape:** 200 x 200
- **Data Types:** float32
- **Source Code:** Capstone_Tutorin_CNN.ipynb

**Steps to Build our Tutorin App:**
- Like this Repository (built during the Capstone Project period)
  - First, download (as a .zip) / fork this Repository.
  
**ML Steps:**
- Download the Capstone_Tutorin_CNN.ipynb file.
  - Location: model/Capstone_Tutorin_CNN.ipynb
- Open Google Colab
- Install necessary Python libraries if not installed (latest version):
  - tensorflow, pandas, numpy, matplotlib, pillow
  - Install them using "!pip install", for example: `!pip install tensorflow`

**CC Steps:** 
- No specific steps provided yet.

**MD Steps:** 
- Fork or Clone https://github.com/Niko-Cloud/Tutorin-Android.git
- Install Android Studio
- Open the project in Android Studio
- Build and Run the APP
- You also can Build the APK version by going into Main Menu -> Build -> Build Bundle's/APK -> Build APK
