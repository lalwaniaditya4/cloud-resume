from flask import jsonify, request
from google.cloud import firestore
import functions_framework

db = firestore.Client()

@functions_framework.http
def counter(request):

    data = request.get_json(silent=True)

    if not data or "visitor_id" not in data:
        return jsonify({"error": "visitor_id required"}), 400

    visitor_id = data["visitor_id"]

    visitor_ref = db.collection("visitors").document(visitor_id)
    visitor_doc = visitor_ref.get()

    counter_ref = db.collection("counter").document("main")

    if not visitor_doc.exists:

        visitor_ref.set({
            "visited": True
        })

        counter_doc = counter_ref.get()
        current_count = counter_doc.to_dict()["count"]

        counter_ref.update({
            "count": current_count + 1
        })

    updated_doc = counter_ref.get()

    return jsonify({
        "count": updated_doc.to_dict()["count"]
    })