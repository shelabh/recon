from openai import OpenAI


import os
from dotenv import load_dotenv

load_dotenv()
client = OpenAI(api_key=os.getenv("GROQ_API_KEY"),
    base_url="https://api.groq.com/openai/v1")
# TODO: The 'openai.base_url' option isn't read in the client API. You will need to pass it when you instantiate the client, e.g. 'OpenAI(base_url="https://api.groq.com/openai/v1")'
# openai.base_url = "https://api.groq.com/openai/v1"  # <--- Groq's API base

def generate_message(name: str, title: str, company: str) -> str:
    prompt = (
        f"Write a short, friendly outreach message to {name}, who is a {title} at {company}. "
        f"The goal is to start a conversation about how our product can help their team."
    )

    response = client.chat.completions.create(
        model="llama3-70b-8192",  # or ""
        messages=[
            {"role": "system", "content": "You are a B2B sales assistant."},
            {"role": "user", "content": prompt},
        ],
        temperature=0.7
    )

    return response.choices[0].message.content
