CREATE TYPE priority_level AS ENUM ('Low', 'Medium', 'High');
CREATE TYPE status_type AS ENUM ('Pending', 'In Progress', 'Completed');

CREATE TABLE events (
    id SERIAL PRIMARY KEY,  -- Automatically incrementing ID
    event VARCHAR(100),     -- Event name
    description VARCHAR(100),  -- Description of the task
    priority priority_level DEFAULT 'Medium',  -- Priority level using ENUM
    status status_type DEFAULT 'Pending',  -- Status using ENUM
    due_date DATE  -- Due date for the task
);

CREATE TABLE completed_events (
    id SERIAL PRIMARY KEY,  -- Automatically incrementing ID
    event VARCHAR(100),     -- Event name
    description VARCHAR(100),  -- Description of the task
    priority priority_level DEFAULT 'Medium',  -- Priority level using ENUM
    status status_type DEFAULT 'Pending',  -- Status using ENUM
    due_date DATE  -- Due date for the task
);

INSERT INTO events (event, description, priority, status, due_date)
VALUES 
('Finish project', 'Completed Toggle List', 'High', 'Pending', '2024-11-15'),
('Networking', 'Events', 'Low', 'Pending', '2024-11-18'),
('Renew Tabs', 'Ferrari', 'High', 'Pending', '2024-11-1'),
('Job Applications', 'SEND EM OUT', 'High', 'Pending', '2024-11-7'),
('Mentor Meeting', 'Ben & David', 'Medium', 'Pending', '2024-12-20'),
('Stock Managment', 'Sell Rivian', 'High', 'Pending', '2024-11-06');
