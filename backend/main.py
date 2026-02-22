"""
Velocity Digital — Backend API (FastAPI)

Handles:
  - POST /contact  → Receives contact form submissions
  - GET  /health   → Health check endpoint

Run:
  uvicorn main:app --reload --port 8000
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from datetime import datetime
import json
import os

app = FastAPI(
    title="BOTPILOT AI API",
    description="Backend API for BOTPILOT AI website — handles contact form submissions.",
    version="1.0.0",
)

# ─── CORS ──────────────────────────────────────────────
# Allow all origins in development. In production, restrict to your domain.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to ["https://yourdomain.com"] in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ─── Models ────────────────────────────────────────────
class ContactForm(BaseModel):
    """Schema for contact form submissions."""
    name: str
    email: str
    phone: str = ""
    message: str


# ─── Storage (file-based for simplicity) ──────────────
SUBMISSIONS_FILE = os.path.join(os.path.dirname(__file__), "submissions.json")


def save_submission(data: dict) -> None:
    """Append a submission to the local JSON file."""
    submissions = []
    if os.path.exists(SUBMISSIONS_FILE):
        with open(SUBMISSIONS_FILE, "r") as f:
            try:
                submissions = json.load(f)
            except json.JSONDecodeError:
                submissions = []

    submissions.append(data)

    with open(SUBMISSIONS_FILE, "w") as f:
        json.dump(submissions, f, indent=2, default=str)


# ─── Endpoints ─────────────────────────────────────────
@app.get("/health")
async def health_check():
    """Health check — useful for monitoring."""
    return {"status": "ok", "timestamp": datetime.utcnow().isoformat()}


@app.post("/contact")
async def submit_contact(form: ContactForm):
    """
    Receive contact form data and store it.
    In production, you'd also send an email notification here.
    """
    submission = {
        "name": form.name,
        "email": form.email,
        "phone": form.phone,
        "message": form.message,
        "submitted_at": datetime.utcnow().isoformat(),
    }

    try:
        save_submission(submission)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to save: {str(e)}")

    return {
        "message": "Form received successfully! We'll get back to you soon.",
        "data": submission,
    }


@app.get("/submissions")
async def get_submissions():
    """
    Admin endpoint to view all submissions.
    In production, protect this with authentication.
    """
    if not os.path.exists(SUBMISSIONS_FILE):
        return {"submissions": []}

    with open(SUBMISSIONS_FILE, "r") as f:
        try:
            submissions = json.load(f)
        except json.JSONDecodeError:
            submissions = []

    return {"submissions": submissions, "total": len(submissions)}
