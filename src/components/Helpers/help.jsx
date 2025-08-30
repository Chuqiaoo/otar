export function formatId(id) {
    if (!id) return '';
    return id
        .split('_')
        .map(id => id.charAt(0).toUpperCase() + id.slice(1))
        .join(' ');
}


