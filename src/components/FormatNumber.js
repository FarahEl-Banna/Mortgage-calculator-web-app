

function commas(str) {
    return (str+"").replace(/.(?=(?:.{3})+$)/g, '$&,');
    }
export default commas; 