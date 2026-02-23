package models

type WorkspaceDashboard struct {
	Id                int    `json:"id"`
	NameWorkspace     string `json:"name_workspace"`
	CreatedAt         string `json:"created_at"`
	NumFiles          int    `json:"num_file"`
	NumNotes          int    `json:"num_notes"`
	NumTodos          int    `json:"num_todos"`
	NumCalendarEvents int    `json:"num_calendar_events"`
	NumFavorites      int    `json:"num_favorites"`
}
