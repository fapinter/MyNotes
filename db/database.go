package db

import (
	"database/sql"
	_ "embed"
	"fmt"

	_ "github.com/mattn/go-sqlite3"
)

// go: embed init.sql
var initSQL string

func Connect(db_path string) (*sql.DB, error) {
	db, err := sql.Open("sqlite3", db_path)
	if err != nil {
		return nil, fmt.Errorf("Falha ao abrir o sqlite: %w", err)
	}
	_, err = db.Exec(initSQL)
	if err != nil {
		return nil, fmt.Errorf("Falha ao inicializar database: %w", err)
	}
	return db, nil
}
