BEGIN;

INSERT INTO beers (user_id, beer_name, type, brewery, ABV, rating)
VALUES 
    (1, 'Fresh Squeezed', 'IPA', 'Deschutes', 6.4, 4.8),
    (1, 'Two Hearted Ale', 'IPA', 'Bells', 7, 4.7),
    (1, 'Mountain Standard IPA', 'IPA', 'Odell', 6.5, 4.9);

COMMIT;