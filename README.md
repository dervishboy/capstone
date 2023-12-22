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
- **Model Name:** Gym Equipments Classifier
- **Model Type:** Image Classifier
- **Model:** model.tflite
- **Algorithm:** CNN
- **Dataset Used:** <a href="https://drive.google.com/file/d/1MY8Rwjbhqpo7i9OaTn_3XWv-A62qtVYh/view?usp=sharing" target="_blank">fitness_CNN_binary_5.zip</a>
- **Dataset Obtained From:** <a href="https://www.kaggle.com/datasets/rifqilukmansyah381/gym-equipment-image/data" target="_blank">Gym Equipment Images</a> & <a href="https://www.kaggle.com/datasets/dutt2302/gym-equipment/data" target="_blank">gym_equipment</a> (Kaggle Public Dataset)
- **Classes:** Benchpress, Dumbells
- **Input Shape:** 200 x 200
- **Data Types:** float32
- **Source Code:** Capstone_Tutorin_CNN.ipynb

**ML Model Development Flowchart:**
<div style ="display:flex;">
  <img src="https://drive.google.com/uc?id=1MwIf_7hEAAUYkxy6bUZ-RuvK3uAyNwka" style="width:650px"/>
</div>

<br>

**Tutorin Flowchart:**
<div style ="display:flex;">
  <img src="https://drive.google.com/uc?id=1KopB8dUyVeZnnwyLU6DktdNIBj-HcuHg" style="width:650px"/>
</div>

<br>

**How to run our Tutorin App?**
- Fork or Clone https://github.com/Niko-Cloud/Tutorin-Android.git
- Install Android Studio
- Open the project in Android Studio
- Build and Run the APP
- You also can Build the APK version by going into Main Menu -> Build -> Build Bundle's/APK -> Build APK
