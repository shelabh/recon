from fastapi import FastAPI
from app.routes import router
from app.db import init_db
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

@app.on_event("startup")
async def on_startup():
    await init_db()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow Chrome extensions
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)
