from flask import Flask, Response, render_template, jsonify, request,redirect,url_for
import cv2
import mediapipe as mp

app = Flask(__name__)

mp_face = mp.solutions.face_detection

face_detection = mp_face.FaceDetection(
    model_selection=0,
    min_detection_confidence=0.5
)

mp_draw = mp.solutions.drawing_utils

camera = None
streaming = False
cheating=False

def generate_frames():
    global camera, streaming

    if camera is None:
        camera = cv2.VideoCapture(0)

    while streaming:
        success, frame = camera.read()
        if not success:
            break
        
        rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
 
       
        results = face_detection.process(rgb_frame)
        face_count = 0

        if results.detections:

            face_count = len(results.detections)
            
            for detection in results.detections:

                mp_draw.draw_detection(frame, detection)

            if face_count>=2:
                global cheating
                cheating=True
                
        _, buffer = cv2.imencode('.jpg', frame)
        frame = buffer.tobytes()
       
        yield(b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/questions')
def questions():
    return render_template('questions.html')

@app.route('/video')
def video():
    global streaming
    streaming = True

    return Response(generate_frames(),mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route("/status")
def status():
    global cheating
    return jsonify({"status":cheating})


@app.route('/stop/<int:score>/<int:no_q>')
def stop(score,no_q):
    global streaming
    global camera
    streaming = False
      # Clean release when stopped
    if camera is not None:
        camera.release()
        camera = None
         

    return render_template('results.html',score=score,no_q=no_q)


if __name__ == '__main__':
    app.run(debug=True)