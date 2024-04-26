#!/bin/bash

analyse_pr_changes() {
    local base_ref="$1"
    local head_ref="$2"
    
    changed_files_with_commits=$(git log --pretty=format:"%h" --name-only "${base_ref}..${head_ref}")
    echo "changed_files_with_commits:"
    echo "$changed_files_with_commits"

    
}
main() {
    if [ $# -ne 2 ]; then
        echo "Usage: $0 <base_ref> <head_ref>"
    fi
    
    base_ref="$1"
    head_ref="$2"
    
    git fetch origin
    
    analyse_pr_changes "${base_ref}" "${head_ref}"
}

main "$@"
