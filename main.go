package main

import (
	"MyNotes/db"
	"embed"
	"log"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
)

//go:embed all:frontend/dist
var assets embed.FS

//go:embed build/appicon.png
var icon []byte

const DB_PATH string = "./db/database_mynotes"

func main() {
	// Create an instance of the app structure
	app := NewApp()

	database, err_db := db.Connect(DB_PATH)
	if err_db != nil {
		log.Fatalln(err_db)
	}
	defer database.Close()
	database.SetConnMaxIdleTime(30)
	database.SetMaxIdleConns(5)
	database.SetMaxOpenConns(10)

	// Create application with options
	err := wails.Run(&options.App{
		Title:            "MyNotes",
		Width:            1024,
		Height:           768,
		Assets:           assets,
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        app.startup,
		Bind: []interface{}{
			app,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
