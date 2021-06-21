class Story {
    constructor(title, creator) {
        this.title = title
        this.creator = creator
        this._comments = []
        this._likes = []
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        }

        if (this._likes.length == 1) {
            let obj = this._likes[0];
            return `${obj.username} likes this story!`;
        }

        let { username } = Object.values(this._likes)[0];
        let likes = this._likes.length - 1;
        return `${username} and ${likes} others like this story!`;
    }

    like(username) {
        let obj = { username }
        let user = this._likes.find(u => Object.values(u) == username);
        if (user) {
            throw new Error("You can't like the same story twice!");
        }
        if (this.creator == username) {
            throw new Error("You can't like your own story!");
        }

        this._likes.push(obj)
        return `${username} liked ${this.title}!`;
    }

    disklike(username) {
        let obj = { username }
        let user = this._likes.find(u => Object.values(u) == username)
        if(!user){
            throw new Error("You can't dislike this story!")
        }
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));

