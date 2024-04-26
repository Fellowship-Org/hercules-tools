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
    git log

    ref_exists() {
        git rev-parse --quiet --verify "$1" >/dev/null
    }

    # Check if the base reference exists
    if ! ref_exists "$base_ref"; then
        echo "Base reference '$base_ref' does not exist. Exiting."
        exit 1
    fi
    
    # Check if the head reference exists
    if ! ref_exists "$head_ref"; then
        echo "Head reference '$head_ref' does not exist. Exiting."
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
