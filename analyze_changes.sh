#!/bin/bash

analyse_pr_changes() {
    local base_ref="$1"
    local head_ref="$2"
    
    if [ -d ".git" ]; then
        echo "Git repository found."
    else
        echo "Not a Git repository. Exiting."
        exit 1
    fi
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
