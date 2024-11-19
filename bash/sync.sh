#!/bin/bash

REPOS=(
  "$HOME/Documents/birliktehareket.org"
  "$HOME/Documents/dotfiles"
  "$HOME/Documents/notes"
)

OUT_OF_SYNC_REPOS=()

for REPO in "${REPOS[@]}"; do
  if [ -d "$REPO/.git" ]; then
    cd "$REPO" || {
      echo "Cannot access $REPO"
      continue
    }

    git fetch >/dev/null 2>&1

    LOCAL=$(git rev-parse @)
    REMOTE=$(git rev-parse @{u})
    BASE=$(git merge-base @ @{u})

    STATUS=$(git status --porcelain)

    if [ -n "$STATUS" ]; then
      echo "❌  $REPO has uncommitted changes."
      OUT_OF_SYNC_REPOS+=("$REPO")
    elif [ "$LOCAL" = "$REMOTE" ]; then
      echo "✔️  $REPO is in sync with remote."
    elif [ "$LOCAL" = "$BASE" ]; then
      echo "❌  $REPO is out of sync: needs to pull."
      OUT_OF_SYNC_REPOS+=("$REPO")
    elif [ "$REMOTE" = "$BASE" ]; then
      echo "❌  $REPO is out of sync: needs to push."
      OUT_OF_SYNC_REPOS+=("$REPO")
    else
      echo "❌  $REPO is diverged: needs both pull and push."
      OUT_OF_SYNC_REPOS+=("$REPO")
    fi
  else
    echo "⚠️  $REPO is not a valid git repository."
  fi
done

if [ ${#OUT_OF_SYNC_REPOS[@]} -eq 0 ]; then
  echo "🎉 All repositories are in sync!"
else
  echo "🚨 Repositories out of sync:"
  for REPO in "${OUT_OF_SYNC_REPOS[@]}"; do
    echo "  - $REPO"
  done
fi
