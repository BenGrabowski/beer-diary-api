ALTER TABLE beer_diary_users
    DROP COLUMN IF EXISTS user_id;

DROP TABLE IF EXISTS beer_diary_users;