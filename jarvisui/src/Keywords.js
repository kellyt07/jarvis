export function KeyWordsList(keywordsList){

    var list = [];

    Object.entries(keywordsList).map(function(key, value){
        var word = new Keyword(key[0], key[1])
        list.push(word);
    });
    console.log(list)

    return(
        <div>
            Keywords Identified:
            {list.map((keyword, index) => (
                <p>{keyword.keyword}: {keyword.description}</p>
            ))}
        </div>
    )
}

export class Keyword{
    constructor(keyword, description) {
        this.keyword = keyword;
        this.description = description;
    }

}