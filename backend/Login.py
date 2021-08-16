import cv2
import numpy as np
import face_recognition
import os
from datetime import datetime

path='Knonimages'
images=[]
className=[]
myList=os.listdir(path)
print(myList)

for cl in myList:
    curImg=cv2.imread(f'{path}/{cl}')
    images.append(curImg)
    className.append(os.path.splitext(cl)[0])


def findEncoding(images):
    encodeList=[]

    for img in images:
        img=cv2.cvtColor(img,cv2.COLOR_BGR2RGB)
        encode=face_recognition.face_encodings(img)[0]
        encodeList.append(encode)
    return encodeList

encodeListKnown=findEncoding(images)
print("Encoding Complete")