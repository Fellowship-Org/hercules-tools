#!/bin/bash

analyze_pr_changes() {
    local base_ref="$1"
    local head_ref="$2"
    
    changed_files_with_commits=$(git log --pretty=format:"%h" --name-only "${base_ref}..${head_ref}")
    echo "changed_files_with_commits:"
    echo "$changed_files_with_commits"
    
    # Get deleted lines in the specified file between the commits
    deleted_lines=$(git diff "${base_ref}" "${head_ref}" -- . | grep '^-[0-9a-zA-Z]' | sed 's/^-//' | sort -u)
    echo "$deleted_lines"
    echo "$file"
    commit="HEAD^"
    echo "$commit"
    file=$(echo "$changed_files_with_commits" | sed -n '2p')
    echo "$file"
    # Loop over each deleted line
    echo "${deleted_lines}" |
    while IFS= read -r deleted_line; do
        # Use git blame to find the commit responsible for the deleted line
        blame_output=$(git blame "$commit" -- "$file" | grep "${deleted_line}" | awk '{print $1}')
        full_commit_id=$(git rev-parse "${blame_output}")
        echo "Deleted line '${deleted_line}' in commit ${full_commit_id}"
    done
    # Loop over each deleted line
}
main() {
    if [ $# -ne 2 ]; then
        echo "Usage: $0 <base_ref> <head_ref>"
    fi
    
    base_ref="$1"
    head_ref="$2"
    
    git fetch origin
    
    analyze_pr_changes "${base_ref}" "${head_ref}"
}

main "$@"
