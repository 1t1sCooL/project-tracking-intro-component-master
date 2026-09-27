const base = import.meta.env.BASE_URL

export function DevicesIllustration() {
  return (
    <div class="illustration">
      <img
        src={`${base}images/illustration-devices.svg`}
        alt="Preview of the Monograph dashboard on a laptop and a phone"
        width="960"
        height="464"
      />
    </div>
  )
}
