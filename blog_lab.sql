USE blog;

DROP TABLE Blogs;
CREATE TABLE Blogs (
	id CHAR(36) PRIMARY KEY,
    title VARCHAR(32) NOT NULL,
    content VARCHAR(256) NOT NULL,
    authorid CHAR(36) NOT NULL,
    FOREIGN KEY (authorid) REFERENCES Authors (id),
    _created DATETIME DEFAULT NOW()
);

INSERT INTO Blogs (id, title, content, authorid) VALUES ('04a06f0b-c6d5-49e5-8c32-d3a6f8076580', 'How to Use Chopsticks', 'Travel to a country where there are no forks and figure it out yourself.', '0d4df81c-372d-4d4b-80e0-8781581d71ee');

DROP TABLE Authors;
 CREATE TABLE Authors (
	id CHAR(36) PRIMARY KEY,
    name VARCHAR(32) NOT NULL,
    email VARCHAR(32) NOT NULL,
    _created DATETIME DEFAULT NOW()
);   
INSERT INTO Authors (id, name, email) VALUES ('0d4df81c-372d-4d4b-80e0-8781581d71ee', 'Slap-a-tha-Bass', 'slapathabass@slap.com');

DROP TABLE Tags;
CREATE TABLE Tags (
	id CHAR(36) PRIMARY KEY,
    name VARCHAR(32) NOT NULL,
    _created DATETIME DEFAULT NOW()
);
SELECT * FROM Blogs;

DROP TABLE BlogTags;
CREATE TABLE BlogTags (
    blogid CHAR(36) NOT NULL,
    tagid CHAR(36) NOT NULL,
    PRIMARY KEY (blogid, tagid),
    FOREIGN KEY (blogid) REFERENCES Blogs (id),
    FOREIGN KEY (tagid) REFERENCES Tags (id)
);
DELIMITER $$
CREATE PROCEDURE spBlogTags (blog_id CHAR(36))
BEGIN
	SELECT
		Tags.id,
        Tags.name
    FROM BlogTags
		JOIN Tags
	ON Tags.id = BlogTags.tagid
    WHERE BlogTags.blogid = blog_id;
END $$
DELIMITER ;
    




	
