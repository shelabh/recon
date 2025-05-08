from fastapi import APIRouter, Depends
from typing import List
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select  # or just 'select' if you're using modern SQLAlchemy
from app.db import get_session
from app.models import Contact
from app.gpt import generate_message
router = APIRouter()

@router.post("/save-contact/")
async def save_contact(contact: Contact, session: AsyncSession = Depends(get_session)):
    message = generate_message(contact.name, contact.title, contact.company)
    contact.message = message
    session.add(contact)
    await session.commit()
    await session.refresh(contact)
    return contact

@router.get("/api/get-contacts", response_model=List[Contact])
async def get_contacts(session: AsyncSession = Depends(get_session)):
    result = await session.execute(select(Contact))
    contacts = result.scalars().all()
    return contacts
