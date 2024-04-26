#!/bin/bash

analyse_pr_changes() {
    local base_ref="$1"
    local head_ref="$2"
    
    echo "changed_files_with_commits:"
    echo "$base_ref"
    echo "$head_ref"

    deleted_lines=$(git diff "${base_ref}" "${head_ref}" -- . | grep '^-[0-9a-zA-Z]' | sed 's/^-//' | sort -u)
    echo "$deleted_lines"
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
