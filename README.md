# AI Guess the Word Game

Questo progetto è un semplice gioco che utilizza le API di OpenAI per generare indizi di una parola segreta che l'utente deve indovinare.

## Requisiti

- Ambiente di sviluppo configurato con **Vite** e **TypeScript**.
- Una chiave API di OpenAI

## Struttura del Progetto

I file utili si trovano dentro `src/`

1. **index.html**  
   File HTML base con un input per l’utente e un bottone per inviare la risposta.

2. **main.ts**  
   Logica del gioco e chiamate all’API di OpenAI.

3. **styles.css**  
   Stile opzionale per migliorare l’aspetto dell’interfaccia.

---

## Come Fare le Chiamate all’API di OpenAI

```curl
curl https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
     "model": "gpt-4o-mini",
     "messages": [{"role": "user", "content": "Say this is a test!"}],
     "temperature": 0.7
   }'
```

### 4. Risultato Atteso

La risposta dell’API è un oggetto JSON con questo formato:

```json
{
  "choices": [
    {
      "text": "È un animale che abbaia e ama le ossa.",
      "index": 0,
      "logprobs": null,
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 20,
    "completion_tokens": 12,
    "total_tokens": 32
  }
}
```

Dovrai estrarre il testo generato usando `data.choices[0]?.text`.

---

## Obiettivo del Progetto

1. **Generare Indizi:** Chiamare l’API di OpenAI per ottenere un indizio basato sulla parola segreta.
2. **Verificare Risposte:** Confrontare la risposta inserita dall’utente con la parola segreta.
3. **Interazione con l’Utente:** Mostrare messaggi come "Corretto!" o "Riprova!" e consentire di richiedere ulteriori indizi.

---

## Esempio di Prompt

Se la parola segreta è `cane`, il prompt potrebbe essere:

> "Descrivi la parola 'cane' con un indizio breve e creativo, ma senza rivelarla."

Il modello potrebbe rispondere con:

> "È un animale che abbaia e ama le ossa."
