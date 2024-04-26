#!/bin/bash

# Function to fetch changed files between two commits using GitHub API
get_changed_files() {
    local base_ref="$1"
    local head_ref="$2"
    
    curl -s "https://api.github.com/repos/<username>/<repository>/compare/${base_ref}...${head_ref}" \
    | jq -r '.files[].filename'
}

# Main function
main() {
    if [ $# -ne 2 ]; then
        echo "Usage: $0 <base_ref> <head_ref>"
        exit 1
    fi
    
    base_ref="$1"
    head_ref="$2"
    
    changed_files=$(get_changed_files "${base_ref}" "${head_ref}")
    
    echo "Changed files:"
    echo "$changed_files"
}

main "$@"
