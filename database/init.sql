PRAGMA foreign_keys = ON;

-- 1. WORKSPACE
CREATE TABLE IF NOT EXISTS workspace (
    id INTEGER PRIMARY KEY,
    name_workspace TEXT NOT NULL,
    directory_name TEXT,
    created_at TEXT NOT NULL
);

-- 2. CALENDAR EVENTS
CREATE TABLE IF NOT EXISTS calendar_events (
    id INTEGER PRIMARY KEY,
    date DATETIME NOT NULL,
    event_title TEXT NOT NULL
);

-- 3. FILES
-- Mantém a relação com workspace.
CREATE TABLE IF NOT EXISTS files (
    id INTEGER PRIMARY KEY,
    id_workspace INTEGER NOT NULL REFERENCES workspace(id) ON DELETE CASCADE,
    filename TEXT NOT NULL,
    file_type TEXT
);

-- 4. NOTES
CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY,
    id_workspace INTEGER NOT NULL REFERENCES workspace(id) ON DELETE CASCADE,
    id_calendar INTEGER REFERENCES calendar_events(id) ON DELETE SET NULL,
    name_notes TEXT NOT NULL,
    text TEXT
);

-- 5. FAVORITES
CREATE TABLE IF NOT EXISTS favorites (
    id INTEGER PRIMARY KEY,
    id_workspace INTEGER NOT NULL REFERENCES workspace(id) ON DELETE CASCADE,
    id_favorite INTEGER NOT NULL, -- ID do objeto favoritado
    type_favorite TEXT NOT NULL -- Ex: 'NOTE', 'FILE'
);

-- 6. TODO
CREATE TABLE IF NOT EXISTS todo (
    id INTEGER PRIMARY KEY,
    id_workspace INTEGER REFERENCES workspace(id) ON DELETE CASCADE, -- Pode ser NULL se for um TODO global
    title TEXT NOT NULL
);

-- 7. TODO ITEMS
CREATE TABLE IF NOT EXISTS todo_items (
    id INTEGER PRIMARY KEY,
    id_todo INTEGER NOT NULL REFERENCES todo(id) ON DELETE CASCADE,
    text_todo TEXT NOT NULL,
    due_date TEXT,
    complete TEXT NOT NULL DEFAULT "Não"
);

-- 8. CALENDAR EVENT FILES
CREATE TABLE IF NOT EXISTS calendar_event_files (
    id_event INTEGER NOT NULL REFERENCES calendar_events(id) ON DELETE CASCADE,
    id_file INTEGER NOT NULL REFERENCES files(id) ON DELETE CASCADE,
    PRIMARY KEY (id_event, id_file)
);

-- ÍNDICES
CREATE INDEX IF NOT EXISTS idx_files_workspace ON files(id_workspace);
CREATE INDEX IF NOT EXISTS idx_notes_workspace ON notes(id_workspace);
CREATE INDEX IF NOT EXISTS idx_todos_workspace ON todo(id_workspace);
