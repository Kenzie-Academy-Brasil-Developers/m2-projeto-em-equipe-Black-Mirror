export function toast(state,text) {
    const modal = document.createElement("dialog")
    const msg   = document.createElement("p")
    modal.classList = state
    msg.innerText = text
    modal.append(msg)
    return modal
}