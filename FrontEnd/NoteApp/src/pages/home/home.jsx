import React, { useState, useContext, useEffect } from "react";
import "./home.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  addnote as addnoteAPI,
  deletebyid as deletebyidAPI,
} from "../../apis/note";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirect if no token
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const handleAddNote = async () => {
    if (!description.trim()) {
      setError("Please enter a note description");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await addnoteAPI(description);
      console.log("Note added:", response);

      // Add new note to local state (with timestamp)
      setNotes([
        ...notes,
        { _id: response._id, description, createdAt: new Date().toISOString() },
      ]);
      setDescription("");
    } catch (err) {
      setError(err?.message || "Failed to add note");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteNote = async (noteId) => {
    setLoading(true);
    setError("");

    try {
      await deletebyidAPI(noteId);
      setNotes(notes.filter((note) => note._id !== noteId));
      console.log("Note deleted");
    } catch (err) {
      setError(err?.message || "Failed to delete note");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <div className="divs">
        <h1>Your Notes</h1>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Add a new note..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleAddNote()}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
          <button
            className="buttonn"
            onClick={handleAddNote}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Note"}
          </button>
        </div>

        {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}
      </div>

      <div className="notes-container">
        {notes.length === 0 ? (
          <p>No notes yet. Add one to get started!</p>
        ) : (
          notes.map((note) => (
            <div
              key={note._id}
              style={{
                padding: "15px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                marginBottom: "10px",
                backgroundColor: "#f9f9f9",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <p>{note.description}</p>
                <small>{new Date(note.createdAt).toLocaleDateString()}</small>
              </div>
              <button
                onClick={() => handleDeleteNote(note._id)}
                disabled={loading}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "3px",
                  cursor: loading ? "not-allowed" : "pointer",
                }}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
