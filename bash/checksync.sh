#!/bin/bash

# Kontrol edilecek local repo dizinlerini burada tanımlayın
REPOS=(
  "$HOME/Documents/101"
  "$HOME/Documents/birliktehareket.org"
  "$HOME/Documents/dotfiles"
  "$HOME/Documents/notes"
)

# Sync olmayan ve durumu takip edilecek repoları tutacak bir dizi
RESULTS=()

# Toplam repo sayısını yazdır
TOTAL_REPOS=${#REPOS[@]}
echo "🔍 Total $TOTAL_REPOS repositories will be checked."
echo

# Her repo için işlem yap
for REPO in "${REPOS[@]}"; do
  echo "Checking repository: $REPO"
  # Repo dizinine gidin
  if [ -d "$REPO/.git" ]; then
    cd "$REPO" || {
      echo "Cannot access $REPO"
      RESULTS+=("🔴 $(basename "$REPO"), cannot be accessed.")
      continue
    }

    # Fetch yaparak remote durumu güncelle
    git fetch >/dev/null 2>&1

    # Local ve remote branch'lerin durumunu kontrol et
    LOCAL=$(git rev-parse @ 2>/dev/null)
    REMOTE=$(git rev-parse @{u} 2>/dev/null)
    BASE=$(git merge-base @ @{u} 2>/dev/null)

    STATUS=$(git status --porcelain)

    if [ -n "$STATUS" ]; then
      RESULTS+=("🟠 $(basename "$REPO"), has uncommitted or untracked changes.")
    elif [ "$LOCAL" = "$REMOTE" ]; then
      RESULTS+=("🟢 $(basename "$REPO"), is up-to-date with remote.")
    elif [ "$LOCAL" = "$BASE" ]; then
      RESULTS+=("🔵 $(basename "$REPO"), needs to pull changes from remote.")
    elif [ "$REMOTE" = "$BASE" ]; then
      RESULTS+=("🟣 $(basename "$REPO"), needs to push changes to remote.")
    else
      RESULTS+=("🔴 $(basename "$REPO"), is diverged: requires both pull and push.")
    fi
  else
    RESULTS+=("⚪ $(basename "$REPO"), is not a valid git repository.")
  fi
done

# Sonuçları yazdırmadan önce bir boşluk bırak
echo
echo "📊 Repository Status Summary:"
for RESULT in "${RESULTS[@]}"; do
  echo "  $RESULT"
done
