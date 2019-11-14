INSERT INTO `role` (`id`, `name`)
VALUES (1, 'ROLE_ADMIN');

INSERT INTO `user` (`id`, `username`, `password`, `active`, `version`) VALUES
(1, 'admin', '$2a$10$9Tc2hzEPPR8blJb6kUEqzejHliT37gk1GrWhS4/orEzMKnGYUaccK', TRUE, 1),
(2, 'user', '$2a$10$9Tc2hzEPPR8blJb6kUEqzejHliT37gk1GrWhS4/orEzMKnGYUaccK', TRUE, 1);

INSERT INTO `user_roles` (`users_id`, `roles_id`)
VALUES (1, 1);