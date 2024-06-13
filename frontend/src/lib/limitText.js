export default function limitText(description, length) {
    return description.length > length ? `${description.slice(0, length)}...` : description;

}