#!/bin/bash

start_date="2024-11-20"
end_date="2024-11-20"

days_to_commit=$((($(date -d "$end_date" +%s) - $(date -d "$start_date" +%s)) / 86400))

min_commits=1
max_commits=5

file_name="example.txt"

current_date=$(date -d "$start_date" +%Y-%m-%d)

for ((i = 0; i <= $days_to_commit; i++)); do
  commit_count=$((RANDOM % ($max_commits - $min_commits + 1) + $min_commits))

  for ((j = 1; j <= $commit_count; j++)); do
    echo "Random text $(date +%s%N)" >>"$file_name"

    git add "$file_name"
    GIT_AUTHOR_DATE="$current_date 12:00:00" GIT_COMMITTER_DATE="$current_date 12:00:00" \
      git commit -m "Commit from $current_date with random change $j"
  done

  current_date=$(date -d "$current_date + 1 day" +%Y-%m-%d)
done

git push
