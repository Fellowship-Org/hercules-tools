#!/bin/bash

analyse_pr_changes() {
    local base_ref="$1"
    local head_ref="$2"
    
    # Get the commit range
    commit_range="${base_ref}..${head_ref}"
    
    # Check if base_ref points to the initial commit
    initial_commit=$(git rev-list --max-parents=0 HEAD)
    if [ "${base_ref}" = "${initial_commit}" ]; then
        commit_range="${head_ref}"
    fi
    
    # Get the list of changed files
    changed_files_with_commits=$(git log --pretty=format:"%h" --name-only "${commit_range}")
    
    # Output the list of changed files with commits
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
