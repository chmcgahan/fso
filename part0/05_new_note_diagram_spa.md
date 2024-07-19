```mermaid
sequenceDiagram
	participant Browser
	participant Server
	
	browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
	activate server
	server-->>browser: 201 response
	deactivate server
```
