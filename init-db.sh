#!/bin/bash
set -e

# Wait for PostgreSQL to start
until pg_isready -U postgres; do
  echo "Waiting for PostgreSQL to start..."
  sleep 2
done

# Modify pg_hba.conf to allow connections without password
echo "host all all all trust" >> "$PGDATA/pg_hba.conf"

# Reload PostgreSQL configuration
pg_ctl reload