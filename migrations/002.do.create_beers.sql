CREATE TABLE beers (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES beer_diary_users(id) ON DELETE CASCADE NOT NULL,
    beer_name TEXT NOT NULL,
    type TEXT,
    brewery TEXT,
    ABV INTEGER,
    rating INTEGER
);