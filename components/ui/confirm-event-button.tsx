"use client"

import { Button } from "./button"

export function ConfirmEventButton() {
  return (
    <Button
      onClick={() => {
        console.log("Clicked !")
      }}
    >
      Schedule It!
    </Button>
  )
}
