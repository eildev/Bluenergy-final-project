export default function path(...args) {
    return `http://127.0.0.1:8000/uploads/${args.join('/')}`;

}