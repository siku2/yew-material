# Report

## Sizes

| Approach          | Total size (KB) | Files |
| ----------------- | --------------: | ----: |
| **SINGLE BUNDLE** |             525 |     1 |
| **INDIVIDUAL**    |            1625 |    28 |
| **BUNDLES**       |             736 |     5 |
| **CHUNKS**        |             532 |    29 |

### Notes

**INDIVIDUAL** can work if the end application goes through a deduplication + merge step. This should, in theory, bring the size down to at most **SINGLE BUNDLE**.

**BUNDLES** groups the dependencies into 5 categories: "form", "icon", "layout", "list", "progress". The hope is that the dependencies in these categories will need to be loaded together anyway.

**CHUNKS** always needs to load a "core.js" file which is 150 KB. The component files only contain the code that is unique to them.
