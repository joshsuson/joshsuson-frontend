import React, { useState } from "react"
import axios from "axios"

export default function FooterForm() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })

    if (ok) {
      form.reset()
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://formspree.io/f/xrgonqgn",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, "Thanks! I'll be in touch shortly", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }

  return (
    <div>
      <div className="pt-3">
        <h2 className="text-white text-2xl md:text-3xl">
          Have something to say?
        </h2>
        <h4 className="text-gray-700 italic mt-2 text-lg md:text-xl">
          I'd like to hear it.
        </h4>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center pt-6 pb-12"
      >
        <fieldset className="flex flex-col gap-4 w-full p-1 md:w-8/12">
          <input
            id="name"
            className="input-glass rounded-md px-1.5 py-3 shadow-xl placeholder-gray-600"
            type="text"
            name="name"
            placeholder="What's your name?"
            required
          />
          <input
            id="email"
            className="input-glass rounded-md px-1.5 py-3 shadow-xl placeholder-gray-600"
            type="email"
            name="email"
            placeholder="What's your email?"
            required
          />
          <textarea
            id="message"
            className="input-glass rounded-md placeholder-gray-600 shadow-xl px-1.5 py-2"
            name="message"
            cols="4"
            rows="4"
            placeholder="What do you have to say?"
            required
          ></textarea>
        </fieldset>
        <button
          className="submit-button uppercase rounded-md p-2 mt-8 lg:w-3/12 shadow-xl hover:shadow-2xl"
          type="submit"
        >
          Send that message
        </button>
        {!!serverState.status && (
          <p className="text-gray-700 pt-2">{serverState.status.msg}</p>
        )}
      </form>
    </div>
  )
}
